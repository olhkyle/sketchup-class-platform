import { Database } from "./supabase";

type Student = Database["public"]["Tables"]["students"]["Row"];

export type { Student };
