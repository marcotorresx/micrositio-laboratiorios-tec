import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "firebase.js";

// Get categories
export async function getCategories() {
  try {
    const res = await getDocs(collection(db, "categories"));
    return res?.docs?.map((doc) => doc.data());
  } catch (error) {
    console.log("GET CATEGORIES ERROR:", error);
    alert("Hubo un error obteniendo las categorías");
  }
}

// Add category
export async function addCategory(name, userAccess, categories, setCategories) {
  try {
    const categoryRef = doc(collection(db, "categories"));
    const category = {
      id: categoryRef.id,
      category: name,
      userAccess,
    };
    await setDoc(categoryRef, category);
    setCategories([...categories, category]);
  } catch (error) {
    console.log("ADD CATEGORY ERROR:", error);
    alert("Hubo un error creando la nueva cateogoría.");
  }
}

// Add category
export async function updateCategory(
  categoryId,
  name,
  userAccess,
  categories,
  setCategories
) {
  try {
    const categoryRef = doc(db, "categories", categoryId);
    await updateDoc(categoryRef, { category: name, userAccess });

    const filteredCategories = categories.filter((c) => c.id !== categoryId);
    const updatedCategory = { id: categoryId, category: name, userAccess };
    setCategories([...filteredCategories, updatedCategory]);
  } catch (error) {
    console.log("EDIT CATEGORY ERROR:", error);
    alert("Hubo un error editando la cateogoría.");
  }
}

// Delete category
export async function deleteCategory(id) {
  try {
    await deleteDoc(doc(db, "categories", id));
  } catch (error) {
    console.log("DELETE CATEGORY ERROR:", error);
    alert("Hubo un error eliminando la cateogoría.");
  }
}

// Get resources
export async function getResources(categoryId) {
  try {
    const resourcesRef = collection(db, "categories", categoryId, "resources");
    const res = await getDocs(resourcesRef);
    return res?.docs?.map((doc) => doc.data());
  } catch (error) {
    console.log("GET RESOURCES ERROR:", error);
    alert("Hubo un error obteniendo los recursos.");
  }
}

// Add resource
export async function addResource(categoryId, resource) {
  try {
    const docRef = doc(db, "categories", categoryId);
    const resourceRef = doc(collection(docRef, "resources"));
    await setDoc(resourceRef, { ...resource, id: resourceRef.id });
  } catch (error) {
    console.log("ADD RESOURCE ERROR:", error);
    alert("Hubo un error agregando el nuevo recurso.");
  }
}

// Update resource
export async function updateResource(categoryId, resource) {
  try {
    const resourceRef = doc(
      db,
      "categories",
      categoryId,
      "resources",
      resource.id
    );
    await updateDoc(resourceRef, resource);
  } catch (error) {
    console.log("UPDATE RESOURCE ERROR:", error);
    alert("Hubo un error actualizando el recurso.");
  }
}

// Delete resource
export async function deleteResource(categoryId, resourceId) {
  try {
    const resourceRef = doc(
      db,
      "categories",
      categoryId,
      "resources",
      resourceId
    );
    await deleteDoc(resourceRef);
  } catch (error) {
    console.log("UPDATE RESOURCE ERROR:", error);
    alert("Hubo un error actualizando el recurso.");
  }
}
