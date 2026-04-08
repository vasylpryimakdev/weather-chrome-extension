import { OpenWeatherTempScale } from "./api";

export interface LocalStorage {
  cities?: string[];
  options?: LocalStorageOptions;
}

export interface LocalStorageOptions {
  homeCity: string;
  tempScale: OpenWeatherTempScale;
}

export type LocalStorageKeys = keyof LocalStorage;

const defaultOptions: LocalStorageOptions = {
  homeCity: "",
  tempScale: "metric",
};

function getFromStorage<K extends LocalStorageKeys>(
  key: K
): Promise<LocalStorage[K]> {
  return new Promise((resolve) => {
    chrome.storage.local.get([key], (res: LocalStorage) => {
      resolve(res[key]);
    });
  });
}

function setToStorage(values: Partial<LocalStorage>): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.local.set(values, () => {
      resolve();
    });
  });
}

export async function setStoredCities(cities: string[]): Promise<void> {
  await setToStorage({ cities });
}

export async function getStoredCities(): Promise<string[]> {
  const cities = await getFromStorage("cities");
  return cities ?? [];
}

export async function setStoredOptions(
  options: LocalStorageOptions
): Promise<void> {
  await setToStorage({ options });
}

export async function getStoredOptions(): Promise<LocalStorageOptions> {
  const options = await getFromStorage("options");
  return options ?? defaultOptions;
}