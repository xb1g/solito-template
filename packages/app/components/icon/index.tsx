// import React from 'react'
// import Icon from '@expo/vector-icons/build/Ionicons'
// import { styled, useDripsyTheme as useTheme } from 'dripsy'

// const StyledIcon = styled(Icon)({})

// type Color = (string & {}) | keyof ReturnType<typeof useTheme>['colors']
// type Name = React.ComponentProps<typeof StyledIcon>['name']

// type Icon =
//   | {
//       name: Name
//       size?: number
//       color?: Color
//     }
//   | React.ReactElement
//   | Name

// type BaseProps = {
//   size?: number
//   color?: Color
//   name: Name
// }
// export type IconProps = {
//   icon: Icon
// }

// export type IconsBaseProps = BaseProps

// export type AllIconProps = (IconProps | BaseProps) & {
//   sx?: React.ComponentProps<typeof StyledIcon>['sx']
//   selectable?: boolean
// }

// function isIconProps(props: AllIconProps): props is IconProps {
//   return !!(props as IconProps).icon
// }

// export default function Ionicons(props: AllIconProps) {
//   const { theme } = useTheme()

//   let icon: Icon | undefined
//   let color: Color = colors.text

//   if (isIconProps(props)) {
//     icon = props.icon
//   } else {
//     icon = {
//       name: props.name,
//       color: props.color,
//       size: props.size,
//     }
//   }

//   if (React.isValidElement(icon)) {
//     return icon
//   }
//   // this exists for conditional props
//   if (typeof icon === 'boolean') return null

//   let name: React.ComponentProps<typeof StyledIcon>['name'] | null = null
//   let size = 22
//   if (typeof icon === 'string') {
//     name = icon as React.ComponentProps<typeof StyledIcon>['name']
//   } else if (icon?.name) {
//     name = icon.name
//     if (icon.size) size = icon.size
//     if (icon.color) {
//       color = colors?.[icon.color] ?? icon.color
//     }
//   }

//   if (!name) return null

//   return (
//     <StyledIcon
//       {...props}
//       color={color}
//       size={size}
//       name={name}
//       sx={props.sx}
//     />
//   )
// }
