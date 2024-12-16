import { Timestamp } from "@angular/fire/firestore";

export type ColumnKeys<T> = (keyof T)[];

export interface Incident {
  title: string;
  description: string;
  priority: 'Baja' | 'Media' | 'Alta';
  status: 'Abierta' | 'En Progreso' | 'Cerrada';
  assignedTo: string;
  createdBy: string;
  action?: string;
  created: Timestamp;
  updated: Timestamp;
}
