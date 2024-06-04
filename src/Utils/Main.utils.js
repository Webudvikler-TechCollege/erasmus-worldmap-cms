/**
 * Byg objekt med header options
 * @param {*} token 
 * @returns 
 */
export const setHeaderOptions = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
}

/**
 * Konverterer et array til et objekt
 * @param {*} elements 
 * @returns 
 */
export const convertArrayToObject = elements => {
  const data = {}
  elements.forEach(element => {
    data[element.name] = element.default
  });
  return data
}

/**
 * Formaterer data fra API til formuar
 * @param {*} data 
 * @returns 
 */
export const formalizeData = data => {
  if(data.is_active) {
    data.is_active = parseInt(data.is_active) === 1 ? true : false    
  } 
  
  return data
}