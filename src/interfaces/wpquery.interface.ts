export interface IMenuQuery {
  [index: string]: string|number|undefined;

  id?: number,
  location?: string
}

export interface ICategoryQuery {
  [index: string]: string|string[]|number|boolean|undefined;

  context?: "view"|"embed"|"edit",
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
  slug?: string,
  fields?: string[]
}

export interface IPostQuery {
  [index: string]: string|string[]|number|number[]|boolean|Date|undefined;
  context?: "view"|"embed"|"edit",
  page?: number,
  per_page?: number,
  search?: string,
  after?: Date,
  author?: string,
  author_exclude?: string,
  before?: Date,
  exclude?: number,
  include?: number,
  offset?: number,
  order?: "asc"|"desc",
  orderby?: "author"|"date"|"id"|"include"|"modified"|"parent"|"relevance"|"slug"|"title",
  slug?: string,
  status?: string,
  categories?: number[],
  categories_exclude?: number[],
  tags?: number[],
  tags_exclude?: number[],
  sticky?: boolean,
  fields?: string[]
}

export interface IPageQuery {
  [index: string]: string|string[]|number|boolean|Date|undefined;
  context?: "view"|"embed"|"edit",
  page?: number,
  per_page?: number,
  search?: string,
  after?: Date,
  author?: string,
  author_exclude?: string,
  before?: Date,
  exclude?: number,
  include?: number,
  menu_order?: number,
  offset?: number,
  order?: "asc"|"desc",
  orderby?: "author"|"date"|"id"|"include"|"modified"|"parent"|"relevance"|"slug"|"title"|"menu_order",
  parent?: number,
  parent_exclude?: number,
  slug?: string,
  status?: string,
  fields?: string[]
}

export interface ITagQuery {
  [index: string]: string|string[]|number|boolean|Date|undefined;
  context?: "view"|"embed"|"edit",
  page?: number,
  per_page?: number,
  search?: string,
  exclude?: number,
  include?: number,
  offset?: number,
  order?: "asc"|"desc",
  orderby?: "author"|"date"|"id"|"include"|"modified"|"parent"|"relevance"|"slug"|"title"|"menu_order",
  hide_empty?: boolean,
  post?: string,
  slug?: string,
  fields?: string[]
}