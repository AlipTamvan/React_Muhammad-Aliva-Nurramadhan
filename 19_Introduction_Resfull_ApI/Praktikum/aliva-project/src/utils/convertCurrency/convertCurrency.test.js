// src/utils/convertCurrency/convertCurrency.test.js

import { describe, it, expect, vi } from "vitest";
import { convertCurrency } from "./convertCurrency"; // Pastikan path ini sesuai

describe("convertCurrency", () => {
  it("converts currency correctly", async () => {
    // Mock fetch untuk mengembalikan nilai kurs
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ rates: { IDR: 14000 } }), // Misalkan 1 USD = 14000 IDR
      })
    );

    const result = await convertCurrency(100, "USD", "IDR");
    expect(result).toBe(1400000); // 100 * 14000
  });

  it("throws an error when fetch fails", async () => {
    // Mock fetch untuk mengembalikan error
    global.fetch = vi.fn(() => Promise.reject("API is down"));

    await expect(convertCurrency(100, "USD", "IDR")).rejects.toThrow(
      "API is down"
    );
  });
});
