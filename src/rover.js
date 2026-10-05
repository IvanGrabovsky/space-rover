/**
 * 🚀 Mars Rover Ares-7: Бортовий комп'ютер навігації
 * 
 * Практичне завдання з теми:
 * - Умовні конструкції (if / else if / else, switch)
 * - Логічні оператори (&&, ||, !)
 * - Оператори порівняння (===, !==, >, <, >=, <=)
 */

/**
 * Завдання 1: Оцінка радіаційної безпеки
 * 
 * Правила:
 * - Якщо рівень радіації менше 50 (< 50) -> 'SAFE'
 * - Якщо рівень радіації 50 або більше (>= 50):
 *   - якщо магнітний щит увімкнено (isShieldActive === true) -> 'WARNING'
 *   - якщо магнітний щит вимкнено -> 'DANGER'
 * 
 * @param {number} radiationLevel - Рівень радіації (мкЗв/год)
 * @param {boolean} isShieldActive - Статус магнітного щита
 * @returns {'SAFE' | 'WARNING' | 'DANGER'} Рівень загрози
 */
export function checkRadiationSafety(radiationLevel, isShieldActive) {
  // TODO: Реалізуйте перевірку радіації
  return 'SAFE';
}

/**
 * Завдання 2: Дозвіл на вихід марсохода в експедицію
 * 
 * Марсохід може розпочати місію ТІЛЬКИ якщо виконуються ВСІ три умови:
 * 1. Рівень заряду батареї не менше 60% (batteryLevel >= 60).
 * 2. Погода сприятлива: або 'clear' (ясно), або 'cloudy' (хмарно). Якщо 'storm' (буря) — заборонено!
 * 3. На борту є щонайменше 2 балони з киснем (oxygenTanks >= 2).
 * 
 * @param {number} batteryLevel - Відсоток заряду (0-100)
 * @param {string} weather - Погода ('clear', 'cloudy', 'storm')
 * @param {number} oxygenTanks - Кількість балонів
 * @returns {boolean} true, якщо місію дозволено розпочати, інакше false
 */
export function canStartExpedition(batteryLevel, weather, oxygenTanks) {
  // TODO: Реалізуйте перевірку за допомогою логічних операторів
  return false;
}

/**
 * Завдання 3: Розрахунок необхідного палива відповідно до типу рельєфу
 * 
 * Формула:
 *   потрібнеПаливо = distanceKm * fuelPerKm * множникРельєфу
 * 
 * Правила:
 * 1. Якщо distanceKm <= 0 або fuelPerKm <= 0 -> повертає 0.
 * 2. Множник рельєфу залежить від terrainType:
 *    - 'flat' (рівнина) -> 1.0
 *    - 'rocky' (скелі) -> 1.3
 *    - 'sand_dunes' (піщані дюни) -> 1.8
 *    - будь-який інший тип -> 1.0
 * 3. Результат округліть до одного знака після коми: Math.round(fuel * 10) / 10
 * 
 * @param {number} distanceKm - Дистанція в кілометрах
 * @param {number} fuelPerKm - Базова витрата палива на 1 км
 * @param {string} terrainType - Тип поверхні
 * @returns {number} Кількість необхідного палива
 */
export function calculateTripFuel(distanceKm, fuelPerKm, terrainType) {
  // TODO: Розрахуйте витрати палива
  return 0;
}
