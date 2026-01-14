import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const categories = [
  "Python",
  "Machine Learning",
  "React",
  "Cybersecurity",
  "Data Science",
];

const initialState = {
  title: "",
  description: "",
  tech: "",
  category: "",
  github: "",
  live: "",
};

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(initialState);
  const [editingId, setEditingId] = useState(null);

  // 🔹 Fetch Projects
  const fetchProjects = async () => {
    const snapshot = await getDocs(collection(db, "projects"));
    setProjects(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // 🔹 Input handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Add / Update Project
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: form.title,
      description: form.description,
      tech: form.tech.split(",").map((t) => t.trim()),
      category: form.category,
      github: form.github,
      live: form.live,
    };

    if (editingId) {
      // UPDATE
      await updateDoc(doc(db, "projects", editingId), payload);
      setEditingId(null);
    } else {
      // ADD
      await addDoc(collection(db, "projects"), {
        ...payload,
        createdAt: serverTimestamp(),
      });
    }

    setForm(initialState);
    fetchProjects();
  };

  // 🔹 Edit Project
  const handleEdit = (project) => {
    setEditingId(project.id);
    setForm({
      title: project.title,
      description: project.description,
      tech: project.tech.join(", "),
      category: project.category,
      github: project.github,
      live: project.live,
    });
  };

  // 🔹 Delete Project
  const handleDelete = async (id) => {
    if (window.confirm("Delete this project?")) {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects();
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#020617]/80 border border-blue-500/20 p-6 rounded-xl mb-10 max-w-xl"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Project" : "Add Project"}
        </h2>

        <input
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-800"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-800"
          required
        />

        <input
          name="tech"
          placeholder="Tech (comma separated)"
          value={form.tech}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-800"
          required
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-800"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          name="github"
          placeholder="GitHub Link"
          value={form.github}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-800"
        />

        <input
          name="live"
          placeholder="Live Link"
          value={form.live}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-800"
        />

        <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-500">
          {editingId ? "Update Project" : "Add Project"}
        </button>
      </form>

      {/* PROJECT LIST */}
      <div className="max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">All Projects</h2>

        {projects.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center bg-gray-900 p-4 rounded mb-3"
          >
            <div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-400">{p.category}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleEdit(p)}
                className="text-blue-400"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="text-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
