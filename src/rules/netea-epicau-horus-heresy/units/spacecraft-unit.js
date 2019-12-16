import Unit from './unit'

export default class SpacecraftUnit extends Unit {
  constructor (detachment, cost) {
    super(detachment, cost, 1)
  }
}
