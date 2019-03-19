import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  RangedWeapon,
  MultipleShot,
  AntiPersonnel,
  AntiTank,
  Disrupt,
  Lance
} from '../weapons'
import {
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave
} from '../special-rules'
import {
  LegionFellblade,
  LegionGlaive,
  LegionPredator,
  LegionPredatorInfernus,
  LegionPredatorExecutioner,
  LegionWhirlwindScorpius,
  LegionUnit,
  LegionPrimarchUnit,
  LegionTerminatorSquad
} from './space-marine-legion'
import MultipleChoiceUnit from './multiple-choice-unit'
import withType from '../with-type'

export class IronHandsPrimarch extends LegionPrimarchUnit {
  constructor (detachment) {
    super(detachment, 450)

    this.transportType = 'terminator'
    this.rules = [
      new DemiGod(),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new Fearless(),
      new SupremeCommander(),
      new Inspiring(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('forgebreaker', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+2'))),
      new Weapon('the-medusan-carapace',
        new RangedWeapon('15cm', new MacroWeapon('4+')),
        new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))
      )
    ]
  }
}

export class IronHandsMedusanImmortalsSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 4)

    this.transportType = 'breacher'
    this.rules = [
      new Fearless()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('las-cutters', new AssaultWeapon(new Lance())),
      new Weapon('bolters', new SmallArms('15cm'))
    ]
  }
}

export class IronHandsGorgonTerminatorSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 85
    this.min = 4
    this.max = 6
    this.quantity = 4
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('power-axes', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('graviton-weapons', new RangedWeapon('15cm', new MultipleShot('2x', new AntiPersonnel('5+'), new AntiTank('6+')), new Disrupt()))
    ]
  }
}

export class IronHandsBodyguardSquad extends IronHandsGorgonTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 3
    this.max = undefined
    this.quantity = 3
  }
}

class IronHandsFellblade extends LegionFellblade {
  constructor (detachment) {
    super(detachment)

    this.cost = 700
    this.min = 3
    this.quantity = 3
  }
}

class IronHandsGlaive extends LegionGlaive {
  constructor (detachment) {
    super(detachment)

    this.cost = 700
    this.min = 3
    this.quantity = 3
  }
}

export class IronHandsSuperHeavyTankSquadronUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new IronHandsFellblade(detachment),
      new IronHandsGlaive(detachment)
    )
  }
}

export class IronHandsPredator extends LegionPredator {
  constructor (detachment) {
    super(detachment)

    this.cost = 50
  }
}

class IronHandsPredatorInfernus extends LegionPredatorInfernus {
  constructor (detachment) {
    super(detachment)

    this.cost = 70
  }
}

class IronHandsPredatorExecutioner extends LegionPredatorExecutioner {
  constructor (detachment) {
    super(detachment)

    this.cost = 70
  }
}

class IronHandsWhirlwindScorpius extends LegionWhirlwindScorpius {
  constructor (detachment) {
    super(detachment)

    this.cost = 70
  }
}

export class IronHandsPredatorStrikeSquadronUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new IronHandsPredator(detachment),
      new IronHandsPredatorInfernus(detachment),
      new IronHandsPredatorExecutioner(detachment),
      new IronHandsWhirlwindScorpius(detachment)
    )
  }
}

withType(IronHandsPrimarch)
withType(IronHandsBodyguardSquad)
withType(IronHandsMedusanImmortalsSquad)
withType(IronHandsGorgonTerminatorSquad)
withType(IronHandsFellblade)
withType(IronHandsGlaive)
withType(IronHandsSuperHeavyTankSquadronUnit)
withType(IronHandsPredator)
withType(IronHandsPredatorInfernus)
withType(IronHandsPredatorExecutioner)
withType(IronHandsWhirlwindScorpius)
withType(IronHandsPredatorStrikeSquadronUnit)
