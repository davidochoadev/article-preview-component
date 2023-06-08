const share = document.getElementById('share');
const share2 = document.getElementById('share-2');
const userContainer = document.getElementById('user-container');
const shareContainer = document.getElementById('share-container');

share.addEventListener('click', () => {
   if(shareContainer.classList.contains('overview')){
      shareContainer.classList.remove('overview');
      console.log("CONTAIN!")
   }else {
      shareContainer.classList.add('overview');
      console.log('not contain!')
   }
})

share2.addEventListener('click', () => {
   shareContainer.classList.remove('overview');
})