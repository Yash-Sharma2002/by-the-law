import express from "express";
import { register } from "../controller2/register";
import { login } from "../controller2/login";
import {
  deleteURL,
  generateURL,
  getURLs,
  submitURL,
  validateURL,
} from "../controller2/generate-url";
import {
  addCredentials,
  getCredentials,
  getPlatformCredentials,
} from "../controller2/credentials";
import {
  deleteUser,
  getAllAdmins,
  getAllUsers,
  getUser,
  updateUser,
} from "../controller2/users";
import {
  createClient,
  deleteClient,
  getAllClients,
  getClient,
  updateClient,
} from "../controller2/clients";
import { createForm, deleteForm, getAllForm, getFormDataDetails } from "../controller2/forms";

const router = express.Router();

router.post("/api/register", register);
router.get("/api/login", login);

// lawyers
router.get("/api/lawyer/all", getAllUsers);
router.get("/api/lawyer/admins", getAllAdmins);
router.get("/api/lawyer/details", getUser);
router.put("/api/lawyer/update", updateUser);
router.delete("/api/lawyer/delete", deleteUser);
router.post("/api/lawyer/create", register);

// clients
router.get("/api/clients/all", getAllClients);
router.get("/api/client/details", getClient);
router.put("/api/client/update", updateClient);
router.delete("/api/client/delete", deleteClient);
router.post("/api/client/create", createClient);

// urls
router.post("/api/url/generate", generateURL);
router.put("/api/url/submit", submitURL);
router.get("/api/url/validate", validateURL);
router.delete("/api/url/delete", deleteURL);


// forms
router.post("/api/form/generate", createForm);
router.delete("/api/form/delete", deleteForm);
router.get("/api/form/all", getAllForm);
router.get("/api/form/data", getFormDataDetails);

router.get("/api/get-all-urls", getURLs);
router.get("/api/get-all-credentials", getCredentials);
router.post("/api/save-credentials", addCredentials);
router.get("/api/get-credentials", getPlatformCredentials);
export default router;
