export const spacing = {
  xs:5,     // option vertical padding
  sm:8,     // button padding
  md:10,    // body paddingTop
  lg:15,    // larger body spacing
  xl:20,    // MOST COMMON value (headers + padding)
  xxl:30,   // body bottom spacing
  xxxl:40,  // larger header / wrapper spacing
  huge:50,  // button marginTop (screen 1)
  massive:70,
  giant:80,
};


export const layouts = {

  /* Screen container */
  container: {
    flex: 1,
    backgroundColor: "#6AA792",
  },

  /* Header block used across Q screens */
  headerBase: {
    paddingLeft:spacing.xl,
    paddingRight:spacing.xl,
    borderWidth:1,
    borderBottomLeftRadius:spacing.xl,
    borderBottomRightRadius:spacing.xl,
    borderColor: '#C3D8C5',
    backgroundColor: '#C3D8C5',
    color: '#674F5D',
    paddingTop: spacing.xl
  },

  /* Body text wrapper */
  body: {
    paddingLeft: spacing.xl,
    color: '#674F5D',
  },

  /* Options grid wrapper */
  optionsWrapper: {
    flexWrap: "wrap",
    paddingLeft: spacing.xxxl,

  },

  /* Option row */
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.xs,
  },

  /* Checkbox shared sizing */
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },

  /* Button text */
  nextButtonText: {
    textAlign: "center",
    padding: spacing.xs,
  },

  /* Button shape */
  nextButtonBorder: {
    borderRadius: 80,
    marginHorizontal: 160,
    marginTop:spacing.huge,
    borderColor: "#674f5d",
    backgroundColor: "#674f5d",
  },
};