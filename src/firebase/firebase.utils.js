import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBerkvn7hd6x62oiflNJ1EL_wiwUvFxU9Y',
  authDomain: 'react-shop-14b02.firebaseapp.com',
  databaseURL: 'https://react-shop-14b02.firebaseio.com',
  projectId: 'react-shop-14b02',
  storageBucket: 'react-shop-14b02.appspot.com',
  messagingSenderId: '866915694031',
  appId: '1:866915694031:web:32264d50e64a3610158eba',
  measurementId: 'G-78DMYZ3G1P',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// 封裝新增資料到 firestore 方法
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = firestore.collection(collectionKey);

  // 使用 batch 來實現全部成功才執行，若有其一失敗就全部取消
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// 將 collection 快照轉換成前端使用格式資料
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // 將陣列轉換成可快速索引的物件格式 hashtables, 將 title 當成索引 key
  return transformedCollection.reduce((acc, it) => {
    acc[it.title.toLowerCase()] = it;
    return acc;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
