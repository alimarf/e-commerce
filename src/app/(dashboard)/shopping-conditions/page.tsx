import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React, { FC } from 'react'

interface ShoppingConditionsProps {

}

const ShoppingConditions: FC<ShoppingConditionsProps> = ({ }) => {
  return (
    <div className='container mx-auto px-4'>

      <div className='text-xl text-bold ml-10 mt-10'>How to order</div>
      <div className="flex flex-row justify-center">
        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setelah login member,
              Customer dapat mencari
              produk yang diinginkan
              melalui fitur “Search” di
              kolom atas
            </p>
          </CardContent>

        </Card>

        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setelah login member,
              Customer dapat mencari
              produk yang diinginkan
              melalui fitur “Search” di
              kolom atas
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-row justify-center">
        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setelah login member,
              Customer dapat mencari
              produk yang diinginkan
              melalui fitur “Search” di
              kolom atas
            </p>
          </CardContent>

        </Card>

        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 4</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setelah login member,
              Customer dapat mencari
              produk yang diinginkan
              melalui fitur “Search” di
              kolom atas
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-row justify-center">
        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 6</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setelah login member,
              Customer dapat mencari
              produk yang diinginkan
              melalui fitur “Search” di
              kolom atas
            </p>
          </CardContent>

        </Card>

        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 6</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setelah login member,
              Customer dapat mencari
              produk yang diinginkan
              melalui fitur “Search” di
              kolom atas
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-row justify-center">
        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 8</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setelah login member,
              Customer dapat mencari
              produk yang diinginkan
              melalui fitur “Search” di
              kolom atas
            </p>
          </CardContent>

        </Card>

        <Card className='m-10 max-w-50'>
          <CardHeader>
            <CardTitle>Step 8</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Setelah login member,
              Customer dapat mencari
              produk yang diinginkan
              melalui fitur “Search” di
              kolom atas
            </p>
          </CardContent>
        </Card>
      </div>


    </div>
  )
}

export default ShoppingConditions;
