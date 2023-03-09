package com.ejemplos.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductoDTO {
	
	private long id;
	private String nombre;
	private float precio;
	private String categoriaNombre;
}
