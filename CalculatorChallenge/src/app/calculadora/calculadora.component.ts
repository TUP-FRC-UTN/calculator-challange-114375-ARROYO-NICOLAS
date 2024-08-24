import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  @Input() valor1: number = 0;
  @Input() valor2: number = 0;
  @Output() resultado = new EventEmitter<number>();

  sumar() {
    this.resultado.emit(this.valor1 + this.valor2);
  }
  restar() {
    this.resultado.emit(this.valor1 - this.valor2);
  }
  multiplicar() {
    this.resultado.emit(this.valor1 * this.valor2);
  }
  dividir() {
    this.resultado.emit(this.valor1 / this.valor2);
  }
  potencia() {
    this.resultado.emit(Math.pow(this.valor1, this.valor2));
  }
  limpiar() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado.emit(0);
  }
}
