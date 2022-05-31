import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  // addDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "firebase.js";

// Get categories
export async function getCategories() {
  try {
    const res = await getDocs(collection(db, "categories"));
    return res.docs.map((doc) => doc.data());
  } catch (error) {
    console.log("GET CATEGORIES ERROR:", error);
    alert("Hubo un error obteniendo las categorías.");
  }
}

// Add category
export async function addCategory(name) {
  try {
    const categoryRef = doc(collection(db, "categories"));
    const category = {
      id: categoryRef.id,
      category: name,
    };
    await setDoc(categoryRef, category);
  } catch (error) {
    console.log("ADD CATEGORY ERROR:", error);
    alert("Hubo un error creando la nueva cateogoría.");
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
    return res.docs.map((doc) => doc.data());
  } catch (error) {
    console.log("GET RESOURCES ERROR:", error);
    alert("Hubo un error obteniendo los recursos.");
  }
}

// Add resource
export async function addResource(categoryId) {
  try {
    const docRef = doc(db, "categories", categoryId);
    const resourceRef = collection(docRef, "resources");
    const resource = {
      id: resourceRef.id,
      title: "Nuevo Recurso",
      description: "Descripción del nuevo recurso.",
      link: "https://youtu.be/-WVIVnenMAo",
    };
    await addDoc(resourceRef, resource);
  } catch (error) {
    console.log("ADD RESOURCE ERROR:", error);
    alert("Hubo un error agregando el nuevo recurso.");
  }
}

// Update resource
export async function updateResource(categoryId, resourceId) {
  try {
    const resourceRef = doc(
      db,
      "categories",
      categoryId,
      "resources",
      resourceId
    );
    const resource = {
      description: "Descripción del nuevo recurso. 2",
    };
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