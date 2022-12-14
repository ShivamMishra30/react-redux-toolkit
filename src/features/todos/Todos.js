import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTodos, del, update } from './todosSlice'
import { List, FlexboxGrid, IconButton, Icon } from 'rsuite'

export default function Todos() {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()
  return (
    <List bordered>
      {todos.map(({ txt, id }, index) => (
        <List.Item bordered key={id}>
          <FlexboxGrid >
            <FlexboxGrid.Item colspan={12}>{txt}</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={10}></FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={2}>
              <IconButton
                onClick={() => dispatch(del(index))}
                icon={<Icon icon="minus" />}
                color="red"
                circle
              />
              <IconButton
                onClick={() => dispatch(update({ index, txt: 'Rowadz' }))}
                icon={<Icon icon="magic" />}
                color="blue"
                circle
              />
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </List.Item>
      ))}
    </List>
  )
}
