import Sun from '@/components/weather/sun';
import Cloudy from '@/components/weather/cloudy';
import Stormy from '@/components/weather/stormy';
import ThunderStorm from '@/components/weather/thunder';
import NightWeather from '@/components/weather/night'
import './index.less'

export default function Login() {
  return (
    <div className='home-ctx'>
      <Sun />
      <Cloudy />
      <Stormy />
      <ThunderStorm />
      <NightWeather />
    </div>
  )
}