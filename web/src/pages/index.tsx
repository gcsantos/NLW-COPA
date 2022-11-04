import Image from 'next/image';
import appPreviewImg from '../assets/app-nlw-preview.png';
import logoImg from '../assets/logo.svg';
import userAvatarExImg from '../assets/user-avatar-exemplos.png';
import iconCheckImg from '../assets/icon-check.svg';
import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants';
import { api } from '../lib/axios';
import { FormEvent, useState } from 'react';

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

// mt - espaçamento acima

export default function Home(props: HomeProps) {

  const [poolTitle, setPoolTitle] = useState('')

  async function createPoll(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await api.post('/pools', {
        title: poolTitle,
      });

      const { code } = response.data
      navigator.clipboard.writeText(code)

      alert('Bolão criado com sucesso, o código foi copiado para área de transferência!')

      setPoolTitle('')
    } catch (err) {
      alert('Falar ao criar o balão, tente novamente')
    }

  }

  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center'>
      <main>
        <Image src={logoImg} alt="NLW Copa" />
        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>
        <div className='mt-10 flex items-center gap-2'>
          <Image src={userAvatarExImg} alt="Avatares dos usuarios" />
          <strong className='text-gray-100 text-xl '>
            <span className='text-ignite-500'>+{props.userCount}</span> pessoas já estão usando
          </strong>
        </div>

        <form onSubmit={createPoll} className='mt-10 flex gap-2'>
          <input className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100' type="text" required placeholder='Qual nome do seu bolão?' onChange={event => setPoolTitle(event.target.value)}
            value={poolTitle}
          />
          <button className='bg-yellow-500 px-6 py-4 text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700' type="submit" >CRIAR MEU BOLÃO</button>
        </form>

        <p className='mt-4 text-sm text-gray-300 leading-relaxed'>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>
        <div className='mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100'>
          <div className='flex items-center gap-6'>
            <Image src={iconCheckImg} alt="" />
            <div className='flex flex-col'>
              <span className='text-2xl font-bold'>+{props.poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className='w-px h-14 bg-gray-600'></div>

          <div className='flex items-center gap-6'>
            <Image src={iconCheckImg} alt="" />
            <div className='flex flex-col'>
              <span className='text-2xl font-bold'>+{props.guessCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={appPreviewImg}
        alt="Dois celular exibindo uma previa da app movel do NLW Copa"
        quality={100}
      />
    </div>
  )
}

export const getServerSideProps = async () => {
  // const response = await fetch('http://localhost:3333/pools/count')
  // const data = await response.json()

  // const poolCountResponse = await api.get('pools/count')
  // const guessCountResponse = await api.get('guesses/count')

  const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count')
  ])


  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count,
    }
  }
}
