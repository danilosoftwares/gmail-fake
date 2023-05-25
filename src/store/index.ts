import { create } from "zustand";
import { Mailbox } from "./types";

interface EmailState {
  email: string;
  setEmail: (email: string) => void;
  emailBox: Mailbox[];
  setEmailBox: (emailBox:Mailbox[]) => void;
  emailViewId: number;
  setEmailViewId: (emailViewId:number) => void;
}

const useStore = create<EmailState>((set) => ({
  email: "",
  setEmail: (email:string) =>
    set((state) => ({
      ...state,
      email
    })),
  emailBox: [],
  setEmailBox: (emailBox:Mailbox[]) =>
    set((state) => ({
      ...state,
      emailBox
    })),
  emailViewId: 0,
  setEmailViewId: (emailViewId:number) =>
    set((state) => ({
      ...state,
      emailViewId
    })),    
}));

export default useStore;
