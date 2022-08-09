import { Request, Response } from "express";
import { SimpleConsoleLogger } from "typeorm";
import { User } from "../entities/users";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email } = req.body;

    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;

    await user.save();

    console.log(user);

    return res.json(user);
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).json({ message: err.message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneBy({ id: parseInt(req.params.id) });
    if (!user)
      return res.status(404).json({ message: "Este usuario no existe" });
    await User.update(
      { id: parseInt(req.params.id) },
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      }
    );
    return res.sendStatus(204);
  } catch (err) {
    if (err instanceof Error) {
      return res.json({ mesage: err.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.delete({ id: parseInt(id) });
    console.log(result);
    if (result.affected === 0) {
      return res.status(404).json({ message: "este usuario no existe" });
    }
    return res.sendStatus(204);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.findOneBy({ id: parseInt(id) });
    return res.json(result);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
  }
};
