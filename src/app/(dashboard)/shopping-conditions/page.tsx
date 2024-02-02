import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React, { FC } from 'react'

interface ShoppingConditionsProps {

}

const ShoppingConditions: FC<ShoppingConditionsProps> = ({ }) => {
  return (
    <div className='container mx-auto px-4'>

      <div className='text-xl text-bold ml-10 mt-10'>How to order</div>
      <div className="container mx-auto px-4">
        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 1</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              Pastikan Anda Sign In Terlebih dahulu sebelum order pesanan, tombol login berada di pojok kanan atas
            </div>
            <img src="/step1.png" className='' />
          </CardContent>

        </Card>

        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 2</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              Setelah login,
              silahkan klik order now pada produk yang anda inginkan
            </div>

            <img src="/step2.png" className='' />
          </CardContent>
        </Card>

        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 3</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              Setelah Masuk kedalam detail produk lanjutkan klik tombol order now
            </div>
            <img src="/step3.png" className='' />
          </CardContent>

        </Card>

        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 4</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              Setelah klik tombol order now, anda akan di arahkan ke whatsapp 
              dan silahkan lakukan transaksi selanjutnya
            </div>
          </CardContent>
        </Card>
      </div>

     
      


    </div>
  )
}

export default ShoppingConditions;
