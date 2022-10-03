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
import getObjFromDoc from "../util/getObjFromDoc"

const getChildren = async (parentId) => {
  const nodesRef = collection(firestoreDb, 'nodes')
  const childrenQuery = query(nodesRef, where('parent', '==', parentId))
  const children = await getDocs(childrenQuery)

  const childObjs = Array.from(children.docs).map(getObjFromDoc);

  return childObjs
}

export default defineEventHandler(async (event) => {
  try { 
    const query = getQuery(event.req)
    const root = query.root || 'root'
    const docs = await getChildren(root)
    return { result: docs }
  }
  catch (error) {
    return { result: [], error: error.message }
  }
})