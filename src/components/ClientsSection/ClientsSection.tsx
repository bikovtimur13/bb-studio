import React, { FC } from 'react';
import styles from './ClientsSection.module.scss';

import useSWR from 'swr';
import { Client } from "@/src/components/ClientsSection/_types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ClientsSection = () => {
  const { data, error } = useSWR('/api/clients', fetcher);

  if (error) return <div>Ошибка загрузки данных</div>;
  if (!data) return <div>Загрузка...</div>;

  return (
    <div className={styles.clients}>
      <div className='main-wrapper'>
        <div className={styles.clients__container}>
          <p className={styles.clients__heading}>клиенты</p>
          {data.map((client: Client) => (
            <div key={client.id} className="clientItem">
              <img src={client.logo} alt={client.name} className="clientLogo" />
              <p>{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;