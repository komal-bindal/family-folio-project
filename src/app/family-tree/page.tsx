"use client";

import FamilyTreeComp from "@/components/FamilyTree";
import { convertFamilyTree, familyTree } from "./model";
import DraggableContainer from "@/components/DraggableContainer";

export const FamilyTreePage = () => {
  const familyData = convertFamilyTree(
    familyTree,
    familyTree.people["1"],
    null
  );

  return (
    <div className="h-screen w-screen  overflow-hidden relative">
      <div>
        <DraggableContainer>
          <FamilyTreeComp data={familyData} maxHeight={4} />
        </DraggableContainer>
      </div>
    </div>
  );
};

export default FamilyTreePage;
