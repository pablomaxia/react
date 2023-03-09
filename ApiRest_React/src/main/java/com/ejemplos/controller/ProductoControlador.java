package com.ejemplos.controller;

import java.util.List;
import com.ejemplos.excepciones.ProductoNotFoundException;
import com.ejemplos.modelo.*;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ProductoControlador {
	private final ProductoRepositorio productoRepositorio;

	@GetMapping("/producto")
	public ResponseEntity<?> obtenerTodos() {
		List<Producto> result = productoRepositorio.findAll();
		if (result.isEmpty()) {
			return ResponseEntity.notFound().build();// Devolver código 404
		} else {
		
			return ResponseEntity.ok(result);// Devuelve código 200 (devuelve datos y los muestra).
		}
	}

	@GetMapping("/producto/{id}")
	public ResponseEntity<?> obtenerUno(@PathVariable Long id) {
		Producto result = productoRepositorio.findById(id).orElse(null);
		if (result == null)
			throw new ProductoNotFoundException(id);// Devolver código 404

		return ResponseEntity.ok(result);// Devuelve código 200 (devuelve datos y
																				// los muestra).

	}

	@PostMapping("/producto")
	public ResponseEntity<?> nuevoProducto(@RequestBody Producto nuevo) {
		return ResponseEntity.status(HttpStatus.CREATED).body(productoRepositorio.save(nuevo));// Devuelve código 201
																							// (producto insertado).

	}

	@PutMapping("/producto/{id}")
	public ResponseEntity<?> editarProducto(@RequestBody Producto editar, @PathVariable Long id) {
		if (!productoRepositorio.existsById(id))
			throw new ProductoNotFoundException(id);// Devolver código 404

		editar.setId(id);
		return ResponseEntity.ok(productoRepositorio.save(editar)); // Devuelve 200
	}
	/*
	 * @PutMapping("/producto/{id}") public ResponseEntity<?>
	 * editarProducto(@RequestBody Producto editar, @PathVariable Long id) { return
	 * productoRepositorio.findById(id).map(p -> { p.setNombre(editar.getNombre());
	 * p.setPrecio(editar.getPrecio()); return
	 * ResponseEntity.ok(productoRepositorio.save(p)); }).orElseGet(() -> { return
	 * ResponseEntity.notFound().build(); }); }
	 */

	@DeleteMapping("/producto/{id}")
	public ResponseEntity<?> borrarProducto(@PathVariable Long id) {
		if (!productoRepositorio.existsById(id))
			throw new ProductoNotFoundException(id);// Devolver código 404

		Producto result = productoRepositorio.findById(id).get();
		productoRepositorio.deleteById(id);
		return ResponseEntity.noContent().build();// Devolver código 204
	}
}
