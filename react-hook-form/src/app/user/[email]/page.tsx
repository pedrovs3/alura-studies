'use client'
import { useEffect, useState } from 'react';
import styles from './UserPage.module.scss'
import { useUsersContext } from '@/common/context/Users';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function UserPage({ params }) {
  const { email } = params;

  return (
    <h1>{email.replace('%40', '@')}</h1>
  )
}
