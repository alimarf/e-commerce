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
            <p>
              Pastikan Anda Login Terlebih dahulu sebelum order pesanan
            </p>
          </CardContent>

        </Card>

        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setelah login,
              silahkan klik order now pada produk yang anda inginkan
            </p>
          </CardContent>
        </Card>

        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setelah Masuk kedalam detail produk lanjutkan klik tombol order now
            </p>
          </CardContent>

        </Card>

        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 4</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setelah klik tombol order now, anda akan di arahkan ke whatsapp 
              dan silahkan lakukan transaksi selanjutnya
            </p>
          </CardContent>
        </Card>
      </div>

     
      


    </div>
  )
}

export default ShoppingConditions;
