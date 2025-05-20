import { Router } from 'express';

const router = Router();

const clientes: any[] = [];

router.post('/', (req, res) => {
  const { nombre, telefono, direccion } = req.body;

  if (!nombre || !telefono || !direccion) {
    return res.status(400).json({ error: 'Faltan datos del cliente.' });
  }

  const nuevoCliente = {
    id: clientes.length + 1,
    nombre,
    telefono,
    direccion
  };

  clientes.push(nuevoCliente);

  res.status(201).json(nuevoCliente);
});

router.get('/', (_req, res) => {
  res.json(clientes);
});

export default router;
