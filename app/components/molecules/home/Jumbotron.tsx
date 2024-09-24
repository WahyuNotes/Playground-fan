import { Button } from '../../atoms/Button'
import { ButtonSecondary } from '../../atoms/ButtonSecondary'

export const Jumbotron = () => {
  return (
    <div>
      <p className="text-center">Dragon Ball Super : Super Hero</p>
      <div className="flex justify-center">
        <ButtonSecondary title="Book Tickets" />
        <Button title="Book Tickets" />
      </div>
    </div>
  )
}
