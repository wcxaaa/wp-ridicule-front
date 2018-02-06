export interface IMenuQuery {
  [index: string]: string|number|undefined;

  term_id?: number,
  name?: string,
  slug?: string,
  term_group?: number,
  term_taxonomy_id?: number,
  taxonomy?: string,
  parent?: number,
  count?: number,
  filter?: string,
  ID?: number
}

export interface ICategoryQuery {
  [index: string]: string|number|boolean|undefined;

  context?: string,
  page?: number,
  per_page?: number,
  search?: string,
  exclude?: number,
  include?: number,
  order?: "asc"|"desc",
  orderby?: "id"|"include"|"name"|"slug"|"term_group"|"description"|"count",
  hide_empty?: boolean,
  parent?: number,
  post?: number,
  slug?: string
}