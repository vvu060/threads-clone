'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

interface UserCardProps {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: 'User' | 'Community';
}

const UserCard = ({
  id,
  name,
  username,
  imgUrl,
  personType,
}: UserCardProps) => {
  const router = useRouter();
  return (
    <article className='user-card'>
      <div className='user-card_avatar'>
        <Image
          src={imgUrl}
          width={48}
          height={48}
          className='rounded-full'
          alt='logo'
        />

        <div className='flex-1 text-ellipsis'>
          <h4 className='text-base-semibold text-light-1'>{name}</h4>
          <div className='text-small-medium text-gray-1'>@{username}</div>
        </div>
      </div>

      <Button
        className='user-card_btn'
        onClick={() => router.push(`/profile/${id}`)}
      >
        View
      </Button>
    </article>
  );
};

export default UserCard;
