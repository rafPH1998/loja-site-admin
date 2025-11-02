// src/utils/server-cookies.js (ou src/composables/useServerCookies.js)

import type { CartItem } from "../types/cart-item";

export const getServerCart = async () => {
  const value = getCookie('cart');
  
  if (!value) return [];
  
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
};

export const setServerCart = async (cart: CartItem[]) => {
  setCookie('cart', JSON.stringify(cart), 7); 
};

export const clearServerCart = () => {
  deleteCookie('cart');
};

const setCookie = (name: string, value: any, days: number = 7) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`;
};

const getCookie = (name: string) => {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};