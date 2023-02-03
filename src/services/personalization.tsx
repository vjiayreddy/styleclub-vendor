import _ from "lodash";
import {
  gqlPersonalizedCategoryConfigAttributeType,
  personalizeFormResponseType,
} from "../shared/types";

export const getScreenByIndex = (
  index: number,
  data: personalizeFormResponseType | undefined | null
) => {
  if (data) {
    const findScreen = data.screens[index];
    if (findScreen) {
      return findScreen;
    } else {
      return null;
    }
  }
  return null;
};

export const getMasterNames = (
  attributes: gqlPersonalizedCategoryConfigAttributeType[] | undefined
): string[] => {
  let masterNames: string[] = [];
  attributes?.map((attribute) => masterNames.push(attribute.master_name));
  return masterNames;
};

export const chunkArray = (myArray: any[], chunk_size: number) => {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  for (index = 0; index < arrayLength; index += chunk_size) {
    let myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }
  return tempArray;
};
