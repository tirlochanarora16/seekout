export enum MemberType {
  REGULAR = "regular",
  ADMIN = "admin",
}

export type Member = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: MemberType;
};

export type MemberScreen = "list" | "add" | "edit";

export type MemberFormData = {
  id: keyof Member;
  value: string | MemberType;
};

export type UpdateMember = {
  id: number;
  member: Member;
};
