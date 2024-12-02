const getStoredWishList = () => {
  const Wishlist = localStorage.getItem('wishlist');
  if (Wishlist) {
    return JSON.parse(Wishlist)
  }
  return [];
}

export { getStoredWishList, saveWishlist }


const saveWishlist = (id) => {
  const storedWishlit = getStoredWishList();
  const exits = storedWishlit.find(wishlist => wishlist === id);
  if (!exits) {
    storedWishlit.push(id);
  }
  localStorage.setItem('wishlist', JSON.stringify(storedWishlit));
}

// read loacal storage functionality
const getStoredRead=()=>{
  const storedRead=localStorage.getItem('read');
  if(storedRead){
    return JSON.parse(storedRead);
  }
  return [];
}

export {getStoredRead,saveRead}

const saveRead=(id)=>{
  const storedReadItem=getStoredRead();
  const exits= storedReadItem.find(read=>read===id);
  if(!exits){
    storedReadItem.push(id);
  }
  localStorage.setItem('read',JSON.stringify(storedReadItem));
}








