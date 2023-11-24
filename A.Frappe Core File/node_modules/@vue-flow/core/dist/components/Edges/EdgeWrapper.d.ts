declare const EdgeWrapper: import('vue').DefineComponent<
  Readonly<{
    id?: any
    type?: any
    updatable?: any
    selectable?: any
    focusable?: any
    name?: any
    edge?: any
  }>,
  () =>
    | import('vue').VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any
        }
      >
    | null,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<
      Readonly<{
        id?: any
        type?: any
        updatable?: any
        selectable?: any
        focusable?: any
        name?: any
        edge?: any
      }>
    >
  >,
  {
    readonly id?: any
    readonly type?: any
    readonly updatable?: any
    readonly selectable?: any
    readonly focusable?: any
    readonly name?: any
    readonly edge?: any
  }
>
export default EdgeWrapper
