import { Column } from "./columns.model";

export class Board {
  constructor(public bname:string,public columns:Column[])
  {}
}
