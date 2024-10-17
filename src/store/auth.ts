import { User } from "@/types/auth";
import { atom } from "jotai";

export const userAtom = atom<User | null>(null);
export const loadingAtom = atom<boolean>(true);
