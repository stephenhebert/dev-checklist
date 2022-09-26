import { getQuery } from 'h3'
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  collectionGroup,
  Timestamp,
} from "firebase/firestore/lite"

import { firestoreDb } from "../lib/firebase"

const getObjFromDoc = (doc) => {
  return {
    ...doc.data(),
    id: doc.id,
  }
}

const getChildren = async (parentId) => {
  const nodesRef = collection(firestoreDb, 'nodes')
  const childrenQuery = query(nodesRef, where('parent', '==', parentId))
  const children = await getDocs(childrenQuery)

  const childObjs = Array.from(children.docs).map(getObjFromDoc);

  return childObjs
};

export const getNodes = async () => {
  const rootNode = await getDoc(doc(firestoreDb, 'nodes', 'root'))
  const rootNodeObj = getObjFromDoc(rootNode)

  const rootChildren = await getChildren('root')

  const responseData = {
    ...rootNodeObj,
    children: rootChildren
  }

  return responseData
};

export default defineEventHandler(async (event) => {
  try { 
    const query = getQuery(event.req)
    const view = query.col || 'tree'
    const docs = await getNodes()
    return { result: docs }
  }
  catch (error) {
    return { result: [], error: error.message }
  }
})