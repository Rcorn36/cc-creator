import { UniversityInOrder } from '@/app/data/empInfo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

function Education() {
  return (
    
      <section id="education" className="px-3 py-8 bg-accent/5 min-w-screen">
        <div className="max-w-6xl mx-auto">
    <h2 className="mt-6 lg:mt-0 text-4xl text-center text-balance font-semibold mb-8">Education</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center justify-between max-w-screen-xl mx-auto">
      {UniversityInOrder.map(uni => (
        <Card key={uni.name}>
          <div>
          <CardHeader>
            <div className="text-accent font-semibold mb-8">
              {uni.name}
            </div>
            <CardTitle>
              {uni.moStart} {uni.yearStart} - {uni.moFinish} {uni.yearFinish}
            </CardTitle>
            <CardDescription>
              {uni.degEarned} - {uni.majorStudied}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image
            src={uni.schoolIcon}
            alt={uni.name}
            width={150}
            height={75}
            />
          </CardContent>
          </div>
        </Card>
      ))}
      </div>
      </div>
    </section>
  )
}

export default Education
