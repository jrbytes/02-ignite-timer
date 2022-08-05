import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { FormContainer, TaskInput, MinutesAmountInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task', {
          minLength: {
            value: 1,
            message: 'Informe a tarefa',
          },
        })}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', {
          min: {
            value: 5,
            message: 'O ciclo precisa ser no mínimo 5 minutos',
          },
          max: {
            value: 60,
            message: 'O ciclo precisa ser no máximo 60 minutos',
          },
          required: true,
        })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
