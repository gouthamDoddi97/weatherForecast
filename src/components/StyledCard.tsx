import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledCardRoot = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  overflow: 'hidden',
  width: '100%',
  height: '100%',
}))

type Props = {
  children: React.ReactNode
  className?: string
}

export default function StyledCard({ children, className = '' }: Props) {
  return <StyledCardRoot className={className}>{children}</StyledCardRoot>
}
