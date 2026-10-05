import { describe, it, expect } from 'vitest';
import { checkRadiationSafety, canStartExpedition, calculateTripFuel } from '../src/rover.js';

describe('☢️ 1. Функція checkRadiationSafety', () => {
  it('повертає "SAFE" коли рівень радіації менше 50, навіть без щита', () => {
    expect(checkRadiationSafety(10, false)).toBe('SAFE');
    expect(checkRadiationSafety(49, false)).toBe('SAFE');
  });

  it('повертає "WARNING" коли радіація >= 50, але магнітний щит активний', () => {
    expect(checkRadiationSafety(50, true)).toBe('WARNING');
    expect(checkRadiationSafety(120, true)).toBe('WARNING');
  });

  it('повертає "DANGER" коли радіація >= 50 і щит вимкнено', () => {
    expect(checkRadiationSafety(50, false)).toBe('DANGER');
    expect(checkRadiationSafety(200, false)).toBe('DANGER');
  });
});

describe('🚀 2. Функція canStartExpedition', () => {
  it('дозволяє виїзд за ідеальних умов (battery 100, clear, 3 tanks)', () => {
    expect(canStartExpedition(100, 'clear', 3)).toBe(true);
  });

  it('дозволяє виїзд при мінімально допустимих нормах (battery 60, cloudy, 2 tanks)', () => {
    expect(canStartExpedition(60, 'cloudy', 2)).toBe(true);
  });

  it('забороняє виїзд при низькому заряді батареї (< 60)', () => {
    expect(canStartExpedition(59, 'clear', 4)).toBe(false);
  });

  it('забороняє виїзд під час піщаної бурі (storm)', () => {
    expect(canStartExpedition(95, 'storm', 5)).toBe(false);
  });

  it('забороняє виїзд при недостатній кількості кисню (< 2)', () => {
    expect(canStartExpedition(80, 'clear', 1)).toBe(false);
    expect(canStartExpedition(80, 'clear', 0)).toBe(false);
  });
});

describe('⛽ 3. Функція calculateTripFuel', () => {
  it('повертає 0 для некоректної або нульової дистанції/витрати', () => {
    expect(calculateTripFuel(0, 5, 'flat')).toBe(0);
    expect(calculateTripFuel(-10, 5, 'flat')).toBe(0);
    expect(calculateTripFuel(10, 0, 'flat')).toBe(0);
  });

  it('розраховує базову витрату для рівнини ("flat")', () => {
    expect(calculateTripFuel(10, 2, 'flat')).toBe(20);
  });

  it('додає коефіцієнт 1.3 для скелястої місцевості ("rocky")', () => {
    // 10 * 2 * 1.3 = 26
    expect(calculateTripFuel(10, 2, 'rocky')).toBe(26);
  });

  it('додає коефіцієнт 1.8 для піщаних дюн ("sand_dunes")', () => {
    // 15 * 3 * 1.8 = 81
    expect(calculateTripFuel(15, 3, 'sand_dunes')).toBe(81);
  });

  it('коректно округлює значення до одного десяткового знака', () => {
    // 7 * 1.5 * 1.3 = 13.65 -> 13.7
    expect(calculateTripFuel(7, 1.5, 'rocky')).toBe(13.7);
  });
});
