import Component, { mixins } from 'vue-class-component';

import { WPQueryService } from "./wpquery.service";

@Component
export class PageService extends mixins(WPQueryService) {

  async getPageByID(pid: number) {

    let page = await this.getPage(pid);

    if (page.id) {
      return page;
    } else {
      return null;
    }

  };

  getL2MenuItems = async (parentName: string) => {
    // build up level2 nav menu
    // --> get parent id by name
    let parentID = -1;
    let parentPage: any = await this.getParentByName(parentName);
    if (parentPage) {
      parentID = parentPage.id;
    }
    // --> get all child page titles and ids
    if (parentID >= 0) {
      return await this.getChildrenInfo(parentID);
    } else {
      console.error(`Cannot find children of parent ${parentName}`);
      return [{
        id: parentID,
        title: "Error not found"
      }]
    }

    // --> return
  }

  async getParentByName(name: string) {
    let pages: any[] = [];
    pages = await this.getPages({fields: ["id", "title"]});
    for (let page of pages) {
      if (page.title.rendered === name) {
        return page;
      }
    }
    return null;
  };

  async getChildrenInfo(parentID: number) {
    let childrenInfo: any[] = [];

    let children: any[] = await this.getPages({
      parent: parentID,
      fields: [
        "id",
        "title"
      ]
    });

    for (let child of children) {
      childrenInfo.push({
        id: child.id,
        title: child.title.rendered
      })
    }

    return childrenInfo;

  }




}