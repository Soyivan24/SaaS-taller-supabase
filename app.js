import { supabase } from './supabase.js';

async function agregarTarea() {
  const input = document.getElementById("nuevaTarea");
  const texto = input.value.trim();
  if (!texto) return;

  const { error } = await supabase.from("tareas").insert([{ texto }]);
  if (error) console.error("Error al agregar tarea:", error);

  input.value = "";
  obtenerTareas();
}

async function eliminarTarea(id) {
  const { error } = await supabase.from("tareas").delete().eq("id", id);
  if (error) console.error("Error al eliminar tarea:", error);
  obtenerTareas();
}

async function obtenerTareas() {
  const { data, error } = await supabase.from("tareas").select("*").order("id", { ascending: true });
  if (error) {
    console.error("Error al obtener tareas:", error);
    return;
  }

  const lista = document.getElementById("listaTareas");
  lista.innerHTML = "";
  data.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.texto;

    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.onclick = () => eliminarTarea(t.id);

    li.appendChild(btn);
    lista.appendChild(li);
  });
}

obtenerTareas();
