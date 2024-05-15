import React from 'react';
import './detail.css';
import { auth } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { useUserStore } from '../../lib/userStore';
import { arrayRemove, arrayUnion, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { doc } from 'firebase/firestore';

function Detail() {

  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db,"users",currentUser.id);

    try {
      await updateDoc(userDocRef,{
        blocked:isReceiverBlocked ? arrayRemove(user.id): arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className='detail'>
      <div className='user'>
        <img src={user?.avatar || './avatar.png'} alt='avatar' />
        <h2>{user?.username}</h2>
        <p>Its your {user?.username}</p>
      </div>


      <div className='info'>

        <div className='option'>
          <div className='title'>
            <span>Chat Settings</span>
            <img src='./arrowUp.png' alt='uparrow' />
          </div>
        </div>

        <div className='option'>
          <div className='title'>
            <span>Chat Settings</span>
            <img src='./arrowUp.png' alt='uparrow' />
          </div>
        </div>

        <div className='option'>
          <div className='title'>
            <span>privacy & help</span>
            <img src='./arrowUp.png' alt='uparrow' />
          </div>
        </div>

        <div className='option'>
          <div className='title'>
            <span>shared photos</span>
            <img src='./arrowDown.png' alt='uparrow' />
          </div>
          <div className='photos'>

            <div className='photoItem'>
              <div className='photoDetail'>
                <img src='https://www.amnesty.org.uk/files/styles/poster/s3/2020-12/justice.png?VersionId=XhUntTPJlZ22ElYalEr6dcwG5Z5cxSMJ&itok=0OE1lxMP' alt='randomPic' />
                <span>photo_2024.png</span>
              </div>
              <img src='./download.png' alt='downloadImage' className='icon' />
            </div>

            <div className='photoItem'>
              <div className='photoDetail'>
                <img src='https://www.amnesty.org.uk/files/styles/poster/s3/2020-12/justice.png?VersionId=XhUntTPJlZ22ElYalEr6dcwG5Z5cxSMJ&itok=0OE1lxMP' alt='randomPic' />
                <span>photo_2024.png</span>
              </div>
              <img src='./download.png' alt='downloadImage' className='icon' />
            </div>


            {/* <div className='photoItem'>
              <div className='photoDetail'>
                <img src='https://www.amnesty.org.uk/files/styles/poster/s3/2020-12/justice.png?VersionId=XhUntTPJlZ22ElYalEr6dcwG5Z5cxSMJ&itok=0OE1lxMP' alt='randomPic' />
                <span>photo_2024.png</span>
              </div>
              <img src='./download.png' alt='downloadImage' className='icon' />
            </div>

            <div className='photoItem'>
              <div className='photoDetail'>
                <img src='https://www.amnesty.org.uk/files/styles/poster/s3/2020-12/justice.png?VersionId=XhUntTPJlZ22ElYalEr6dcwG5Z5cxSMJ&itok=0OE1lxMP' alt='randomPic' />
                <span>photo_2024.png</span>
              </div>
              <img src='./download.png' alt='downloadImage' className='icon' />
            </div> */}

          </div>
        </div>


        <div className='option'>
          <div className='title'>
            <span>Shared Files</span>
            <img src='./arrowUp.png' alt='uparrow' />
          </div>
        </div>
        <button onClick={handleBlock}>{
          isCurrentUserBlocked ? "You are Blocked!" :isReceiverBlocked? "UserBlocked" : "Block User"
        }</button>
        <button className='logout' onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail;
