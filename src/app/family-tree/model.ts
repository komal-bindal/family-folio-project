export type Person = { id: string; name: string; relations: Relation[] };

export type Relation = {
  type: string; //["spouse", "child", "parent"]
  to: string;
};

export type FamilyTree = { people: Record<string, Person> };

export const familyTree: FamilyTree = {
  people: {
    "1": {
      id: "1",
      name: "Mother",
      relations: [
        { type: "spouse", to: "2" },
        { type: "child", to: "3" },
        { type: "child", to: "4" },
        { type: "child", to: "5" },
        { type: "child", to: "6" },
        { type: "child", to: "7" },
        { type: "child", to: "8" },
      ],
    },
    "2": {
      id: "2",
      name: "Father",
      relations: [
        { type: "spouse", to: "1" },
        { type: "parent", to: "3" },
        { type: "parent", to: "4" },
        { type: "child", to: "5" },
        { type: "parent", to: "6" },
        { type: "parent", to: "7" },
        { type: "parent", to: "8" },
      ],
    },
    "3": {
      id: "3",
      name: "Child 1",
      relations: [
        { type: "parent", to: "1" },
        { type: "spouse", to: "9" },
        { type: "parent", to: "2" },
        { type: "child", to: "10" },
      ],
    },
    "4": {
      id: "4",
      name: "Child 2",
      relations: [
        { type: "parent", to: "1" },
        { type: "parent", to: "2" },
        { type: "child", to: "50" },
      ],
    },
    "5": {
      id: "5",
      name: "Child 3",
      relations: [
        { type: "parent", to: "1" },
        { type: "parent", to: "2" },
      ],
    },
    "6": {
      id: "6",
      name: "Child 4",
      relations: [
        { type: "parent", to: "1" },
        { type: "parent", to: "2" },
      ],
    },
    "7": {
      id: "7",
      name: "Child 5",
      relations: [
        { type: "parent", to: "1" },
        { type: "parent", to: "2" },
      ],
    },
    "8": {
      id: "8",
      name: "Child 6",
      relations: [
        { type: "parent", to: "1" },
        { type: "parent", to: "2" },
      ],
    },
    "9": {
      id: "9",
      name: "Spouse of Child 1",
      relations: [
        { type: "spouse", to: "3" },
        { type: "parent", to: "10" },
      ],
    },
    "10": {
      id: "10",
      name: "Grandchild 1",
      relations: [
        { type: "parent", to: "3" },
        { type: "parent", to: "9" },
        { type: "child", to: "32" },
        { type: "child", to: "33" },
      ],
    },
    "50": {
      id: "10",
      name: "Grandchild 2",
      relations: [
        { type: "parent", to: "4" },
        { type: "parent", to: "6" },
      ],
    },
    "11": {
      id: "11",
      name: "Grandfather (Father's side)",
      relations: [
        { type: "spouse", to: "12" },
        { type: "child", to: "2" },
      ],
    },
    "12": {
      id: "12",
      name: "Grandmother (Father's side)",
      relations: [
        { type: "spouse", to: "11" },
        { type: "parent", to: "2" },
      ],
    },
    "13": {
      id: "13",
      name: "Grandfather (Mother's side)",
      relations: [
        { type: "spouse", to: "14" },
        { type: "child", to: "1" },
      ],
    },
    "14": {
      id: "14",
      name: "Grandmother (Mother's side)",
      relations: [
        { type: "spouse", to: "13" },
        { type: "parent", to: "1" },
      ],
    },
    "15": {
      id: "15",
      name: "Great Grandfather (Father's side)",
      relations: [
        { type: "spouse", to: "16" },
        { type: "child", to: "11" },
      ],
    },
    "16": {
      id: "16",
      name: "Great Grandmother (Father's side)",
      relations: [
        { type: "spouse", to: "15" },
        { type: "parent", to: "11" },
      ],
    },
    "17": {
      id: "17",
      name: "Great Grandfather (Mother's side)",
      relations: [
        { type: "spouse", to: "18" },
        { type: "child", to: "13" },
      ],
    },
    "18": {
      id: "18",
      name: "Great Grandmother (Mother's side)",
      relations: [
        { type: "spouse", to: "17" },
        { type: "parent", to: "13" },
      ],
    },
    "19": {
      id: "19",
      name: "Great Great Grandfather (Father's side)",
      relations: [
        { type: "spouse", to: "20" },
        { type: "child", to: "15" },
      ],
    },
    "20": {
      id: "20",
      name: "Great Great Grandmother (Father's side)",
      relations: [
        { type: "spouse", to: "19" },
        { type: "parent", to: "15" },
      ],
    },
    "21": {
      id: "21",
      name: "Great Great Grandfather (Mother's side)",
      relations: [
        { type: "spouse", to: "22" },
        { type: "child", to: "17" },
      ],
    },
    "22": {
      id: "22",
      name: "Great Great Grandmother (Mother's side)",
      relations: [
        { type: "spouse", to: "21" },
        { type: "parent", to: "17" },
      ],
    },
    "23": {
      id: "23",
      name: "Great Great Grandchild 1",
      relations: [
        { type: "parent", to: "10" },
        { type: "parent", to: "11" },
      ],
    },
    "24": {
      id: "24",
      name: "Great Great Grandchild 2",
      relations: [
        { type: "parent", to: "10" },
        { type: "parent", to: "12" },
      ],
    },
    "25": {
      id: "25",
      name: "Great Great Grandchild 3",
      relations: [
        { type: "parent", to: "13" },
        { type: "parent", to: "14" },
      ],
    },
    "26": {
      id: "26",
      name: "Great Great Grandchild 4",
      relations: [
        { type: "parent", to: "15" },
        { type: "parent", to: "16" },
      ],
    },
    "27": {
      id: "27",
      name: "Great Great Grandchild 5",
      relations: [
        { type: "parent", to: "17" },
        { type: "parent", to: "18" },
      ],
    },
    "28": {
      id: "28",
      name: "Great Great Grandchild 6",
      relations: [
        { type: "parent", to: "19" },
        { type: "parent", to: "20" },
      ],
    },
    "29": {
      id: "29",
      name: "Great Great Grandchild 7",
      relations: [
        { type: "parent", to: "21" },
        { type: "parent", to: "22" },
      ],
    },
    "30": {
      id: "30",
      name: "Great Great Great Grandfather (Father's side)",
      relations: [
        { type: "spouse", to: "31" },
        { type: "child", to: "19" },
      ],
    },
    "31": {
      id: "31",
      name: "Great Great Great Grandmother (Father's side)",
      relations: [
        { type: "spouse", to: "30" },
        { type: "parent", to: "19" },
      ],
    },
    "32": {
      id: "32",
      name: "Great Grandchild 1",
      relations: [
        { type: "parent", to: "10" },
        { type: "parent", to: "34" },
      ],
    },
    "33": {
      id: "33",
      name: "Great Grandchild 2",
      relations: [
        { type: "parent", to: "10" },
        { type: "parent", to: "35" },
      ],
    },
    "34": {
      id: "34",
      name: "Spouse of Great Grandchild 1",
      relations: [
        { type: "spouse", to: "32" },
        { type: "parent", to: "36" },
        { type: "parent", to: "37" },
      ],
    },
    "35": {
      id: "35",
      name: "Spouse of Great Grandchild 2",
      relations: [
        { type: "spouse", to: "33" },
        { type: "parent", to: "38" },
        { type: "parent", to: "39" },
      ],
    },
    "36": {
      id: "36",
      name: "Great Great Grandchild 1",
      relations: [
        { type: "parent", to: "34" },
        { type: "parent", to: "32" },
      ],
    },
    "37": {
      id: "37",
      name: "Great Great Grandchild 2",
      relations: [
        { type: "parent", to: "34" },
        { type: "parent", to: "32" },
      ],
    },
    "38": {
      id: "38",
      name: "Great Great Grandchild 3",
      relations: [
        { type: "parent", to: "35" },
        { type: "parent", to: "33" },
      ],
    },
    "39": {
      id: "39",
      name: "Great Great Grandchild 4",
      relations: [
        { type: "parent", to: "35" },
        { type: "parent", to: "33" },
      ],
    },
  },
};

export function convertFamilyTree(
  familyTree: FamilyTree,
  startNode: Person,
  parentNode: any
) {
  let result: any = [];

  const spouse = startNode.relations.filter(
    (relation) => relation.type === "spouse"
  )[0];
  let name: String = "";
  if (spouse) {
    name = `${startNode.name}-${familyTree.people[spouse?.to]?.name}`;
  } else {
    name = `${startNode.name}`;
  }
  result.push({
    parent: parentNode,
    name: name,
  });

  startNode.relations.forEach((relation) => {
    if (relation.type === "child") {
      const a = convertFamilyTree(
        familyTree,
        familyTree.people[relation.to],
        name
      );
      result = [...result, ...a];
    }
  });

  return result;
}
